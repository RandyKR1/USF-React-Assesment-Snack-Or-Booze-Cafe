function unroll(squareArray) {
    if (squareArray.length === 0) return [];
    
    let result = [];
    let left = 0;
    let right = squareArray.length - 1;
    let top = 0;
    let bottom = squareArray.length - 1;
  
    while (left <= right && top <= bottom) {
      // Traverse from left to right along the top row
      for (let i = left; i <= right; i++) {
        result.push(squareArray[top][i]);
      }
      top++;
      
      // Traverse from top to bottom along the right column
      for (let i = top; i <= bottom; i++) {
        result.push(squareArray[i][right]);
      }
      right--;
      
      // Traverse from right to left along the bottom row, if still within bounds
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(squareArray[bottom][i]);
        }
        bottom--;
      }
      
      // Traverse from bottom to top along the left column, if still within bounds
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(squareArray[i][left]);
        }
        left++;
      }
    }
    
    return result;
  }
  