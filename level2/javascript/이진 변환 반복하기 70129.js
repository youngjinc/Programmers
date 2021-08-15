function solution(s) {
    let cnt = 0, deleted = 0;

    while(s!= '1'){
        let tmp = '';
        for(let i = 0; i < s.length; i++){
            if(s[i] == '0')
                deleted++;
            else
                tmp+='1';
        }
        cnt++;
        s = (tmp.length).toString(2);
    }
    return [cnt, deleted];
}