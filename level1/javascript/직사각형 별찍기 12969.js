process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // 방법 1
    console.log(('*'.repeat(a) + '\n').repeat(b));

    // 방법 2
    const star = '*'.repeat(a);
    for(let i = 0; i < b; i++)
        console.log(star + '\n');
});


