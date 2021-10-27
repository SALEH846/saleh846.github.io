let arr = [9, 6, 4, 8, 5, 1, 2, 7, 3];
arr = arr.sort();

function findKthLargest(){
    let k = Number(document.getElementById("kth").value);
    document.getElementById("kthLargest").innerHTML = arr[arr.length-k];
}