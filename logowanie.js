const zalogowany = document.getElementById("zalogowany")
const zarejestrowany = document.getElementById("zarejestrowany")

zalogowany.addEventListener("click", function(){
    alert("Jesteś zalogowany")
})

zarejestrowany.addEventListener("click", function() {
    alert("Zarejestrowałeś się, teraz możesz się zalogować")
})