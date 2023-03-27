function EventHandler() {
  function alertFunc() {
    alert("클릭됨");
  }
  return (
    <>
      <span onClick={alertFunc}>클릭</span>
      <br />
      <span
        onClick={() => {
          let num = 10;
          num += 5;
          console.log(num);
        }}
      >
        숫자계산
      </span>
    </>
  );
}

export default EventHandler;
