
const clickCopy = () => {
    $("button").click(function(){
        let emoji = this.innerText;
        $("#temp").val(emoji);
        $("#temp").select();
        document.execCommand("copy");
    })
    
    
}
clickCopy();
//always call outside the fucktion.
//call cant come from in the house.

