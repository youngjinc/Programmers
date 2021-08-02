function solution(files) {
    // 방법 1 : match() 사용
    let answer = files.map((file,idx)=>[idx].concat(file.match(/([^0-9]+)([0-9]+)([\w\s.-]*)/).filter((_, idx)=> idx>=1 && idx<=3)));
    answer.sort((a,b)=>{
        return a[1].toLowerCase().localeCompare(b[1].toLowerCase()) || a[2]-b[2] || a[0]-b[0]
    });
    return answer.map(file=>files[file[0]]);

    /* 방법 2 : replace() 및 split() 사용
    let answer = files.map((file,idx)=>[idx].concat(file.replace(/([^0-9]+)([0-9]+)([\w\s.-]*)/, "$1|$2|$3").split("|")));
    answer.sort((a,b)=>{
        return a[1].toLowerCase().localeCompare(b[1].toLowerCase()) || a[2]-b[2] || a[0]-b[0]
    });
    return answer.map(file=>files[file[0]]);
    */
}

// 테스트 코드
console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));