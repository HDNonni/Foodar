
navigation sample responsive w/ flexbox

@media all and (max-width: 1000px) {
   .navigation ul {
      flex-wrap: wrap;
   }
   
   .navigation li {
      flex: 1 1 50%;
   }

   .navigation .user {
      flex: 1 1 33.33%;
   }
}

@media all and (max-width: 480px) {
   .navigation li {
      flex-basis: 100%;
   }

   .navigation .user {
      flex-basis: 50%;
   }
}

related to tables:
 border: controls the border property of the table;we get more in depth into borders in another video, so for now you should know that you can manipulate a border’s color, style or thicknessThere is also border-collapse which allows padding and margin calculation to be included in the border’s width.caption-side specifies either bottom or top for the caption to be placed.border-spacing controls the spacing of borders in-between cells.empty-cells is a property that you can use to toggle displaying or hiding the empty cells of a table and finally, table-layout will alter the width of the table based on content size or fixed widths.So, let’s jump to our first example. You’ll see here that I’ve defined a table here and I have 3 rows with 2 cells per row.For the first row, I have a <th> element, for the subsequent ones I have a <td> element specifying data in them. .
 the border-spacing is the horizontal and vertical spacing.It only works if the border-collapse property is set to separate

 Get current location code
 const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
   //get user location w/navigator object and built in API 
   //with geolocation with the help of getCurrentPositon 
   //that takes 3 potential parameters
   //can use in food delivery sites
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};