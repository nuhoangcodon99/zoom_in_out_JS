function domId(id) {
    return document.getElementById(id);
}

//Hàm tối ưu tăng giảm áp dụng cho các bài khác nhau về zoom in và zoom out
function zoomInOut(size, id) {
    //lấy ra giá trị size của thẻ đó gán Number vì là số học
    var tag = domId(id);
    var fSize = Number(tag.style.fontSize.replace("px", ""));
    tag.style.fontSize = fSize + size + "px";
}
// zoom image in and out theo %
function zoomImage(percent = 1, id) {
    var tag = domId(id);
    let sizeofImage = Number(tag.style.width.replace("%", ""));
    console.log(sizeofImage);
    tag.style.width = sizeofImage + percent + "%";
}
