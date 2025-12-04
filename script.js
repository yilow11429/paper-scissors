let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ["剪刀", "石頭", "布"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("player").innerText = "你出的是：" + playerChoice;
    document.getElementById("computer").innerText = "電腦出的是：" + computerChoice;

    let result = "";

    if (playerChoice === computerChoice) {
        result = "平手！";
    } else if (
        (playerChoice === "剪刀" && computerChoice === "布") ||
        (playerChoice === "石頭" && computerChoice === "剪刀") ||
        (playerChoice === "布" && computerChoice === "石頭")
    ) {
        result = "你贏了！🎉";
        playerScore++;
    } else {
        result = "你輸了！😢";
        computerScore++;
    }

    document.getElementById("outcome").innerText = result;
    document.getElementById("score").innerText =
        `玩家：${playerScore} 分　 電腦：${computerScore} 分`;
}
