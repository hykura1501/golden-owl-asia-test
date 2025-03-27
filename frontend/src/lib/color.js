export function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  export default (length) => {
    let colors = [];
    while (colors.length != length) {
      var color = getRandomColor();
      if (!colors.some((c) => c === color)) {
        colors.push(color);
      }
    }
    return colors;
  };