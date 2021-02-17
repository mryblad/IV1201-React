const HeaderView=()=>
    <div className="header">
        This is a header
        <br/><button onClick={() => {
          console.log("test");
          window.localStorage.removeItem("authToken");
        }}>Logout</button>
    </div>

export {HeaderView};
