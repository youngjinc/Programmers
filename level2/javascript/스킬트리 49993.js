function solution(skill, skill_trees) {
    let answer = 0;
    const skills = skill.split("");
    
    for(let i = 0; i < skill_trees.length; i++){
        let tree = [];

        for(let j = 0; j < skill_trees[i].length; j++){
            let s = skill_trees[i][j];
            if(skills.indexOf(s) != -1)
                tree.push(s)
        }
        console.log(tree, skills.slice(0, tree.length));

        if(""+tree == ""+skills.slice(0, tree.length))
            answer++;
    }
    
    return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));