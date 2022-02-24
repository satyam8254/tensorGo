import React from "react";
function Form(){
    return(
        <div>
            <form>
                <label>Enter name:<input type="text" /></label>
                <label>Enter email:<input type="text" /></label>
                <label>Enter gender:<input type="text" /></label>
                <label>Enter status:<input type="text" /></label>
                <input type="submit" />
            </form>      

        </div>
    );
}

export default Form;