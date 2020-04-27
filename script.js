
const clickCopy = () => {
    // $("button").attr("id", "clicked")
    $("button").click(function(){
        let emoji = this.innerText;
        $("#temp").val(emoji);
        $("#temp").select();
        document.execCommand("copy");
        document.innerHTML="clicked"
        
    })
    
    
    
}
clickCopy();
//always call outside the fucktion.
//call cant come from in the house.

