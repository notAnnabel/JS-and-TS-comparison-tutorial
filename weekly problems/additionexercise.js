function addUpTo(n){
    return (n+1)*n/2
}

function loopAddUpTo(n){
let sum = 0;

for (let i=1; i<=n; i++){
    sum=sum+i
}

console.log(sum);
};

loopAddUpTo(20);

const result = addUpTo(100)