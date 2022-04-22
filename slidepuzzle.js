let tiles = []
const shuffleBtn = document.getElementById("shuffleBtn");
shuffleBtn.addEventListener("click", onShuffle, "false");

window.onload = function() {
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", ""];

    // パネルを取得
    let panel = document.getElementById("panel");

    // タイルを作成
    numbers.forEach((value, index) => {
        let tile = document.createElement("div");
        tile.id = value;
        tile.className = "tile";
        tile.onclick = tileClick;
        tile.index = index;
        tile.textContent = value;
        panel.appendChild(tile);
        // tilesとして保持しておく
        tiles.push(tile);
    });
    checkColor();
}

// 定位置なら色を付ける処理
function checkColor() {

    let tile = document.getElementsByClassName("tile");
    Object.keys(tile).forEach((value, index) => {

        let t = tile[value];

        if (t.id === t.textContent && parseInt(t.id) === 1) {
            // 樺色 かばいろ
            tile[index].style.backgroundColor = "#cd5e3c";
        } else if(t.id === t.textContent && parseInt(t.id) === 2) {
            // 花緑青 はなろくしょう
            tile[index].style.backgroundColor = "#00a381";
        } else if(t.id === t.textContent && parseInt(t.id) === 3) {
            // 白群 びゃくぐん
            tile[index].style.backgroundColor = "#83ccd2";
        } else if(t.id === t.textContent && parseInt(t.id) === 4) {
            // 鶸色 ひわいろ
            tile[index].style.backgroundColor = "#d7cf3a";
        } else if(t.id === t.textContent && parseInt(t.id) === 5) {
            // 緋色 ひいろ
            tile[index].style.backgroundColor = "#d3381c";
        } else if(t.id === t.textContent && parseInt(t.id) === 6) {
            // 瑠璃色 るりいろ
            tile[index].style.backgroundColor = "#1e50a2";
        } else if(t.id === t.textContent && parseInt(t.id) === 7) {
            // 桃花色 ももはないろ
            tile[index].style.backgroundColor = "#e198b4";
        } else if(t.id === t.textContent && parseInt(t.id) === 8) {
            // 淡萌黄 うすもえぎ
            tile[index].style.backgroundColor = "#93ca76";
        } else {
            // 定位置出ないなら白にする
            tile[index].style.backgroundColor = "#ffffff"
        }
    });
}

// シャッフル関数
function onShuffle() {

    for (i = 0; i < 1000; i++) {
        tiles.forEach((tile, index) => {

            // 疑似的なクリック位置を生成
            let panel = document.getElementById("panel"),
                ranNum = Math.floor(Math.random() * 9),
                k = parseInt(panel.children[ranNum].textContent);

            if (tile.textContent === "") {
                if (index === (k + 3)) {
                    tileSwap(index, k);
                } else if (index === (k - 3)) {
                    tileSwap(index, k);
                } else if (index === (k + 1)) {
                    tileSwap(index, k);
                } else if (index === (k - 1)) {
                    tileSwap(index, k);
                }
            }
        });
    }
    checkColor();
}

function tileClick(e) {
    // クリック位置を取得
    let i = e.target.index;
    tiles.forEach((tile, index) => {
        // タイルが空の場所を探す
        if (tile.textContent === "") {
            // 空タイルとクリック位置が同じならそこに移動させる
            if (index === (i + 3)) {
                // 上に移動
                tileSwap(index, i);
            } else if (index === (i - 3)) {
                // 下に移動
                tileSwap(index, i);
            } else if (i % 3 !== 2 && index === (i + 1)) {
                // i % 3 !== 2で斜め移動を防ぐ
                // 右に移動
                tileSwap(index, i);
            } else if (i % 3 !== 0 && index === (i - 1)) {
                // i % 3 !== 0で斜め移動を防ぐ
                // 左に移動
                tileSwap(index, i);
            }
        }
    });
}

function tileSwap(i, j){
    // タイルの数字を入れ替える
    let tmp = tiles[i].textContent;
    tiles[i].textContent = tiles[j].textContent;
    tiles[j].textContent = tmp;
    checkColor();
}