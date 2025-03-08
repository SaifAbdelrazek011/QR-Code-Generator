const QRcode = document.querySelector(".QRcode")
const generateQRBtn = document.querySelector(".generating-btn")

const getQRcode = async function (url) {
        
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;
        const inputFieldValue = document.querySelector(".input-link").value;
        if(inputFieldValue.trim()){
        try{
            url = apiUrl +`${inputFieldValue}`
            const response = await fetch(url) ;
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            const blob = await response.blob();
            const imgUrl = URL.createObjectURL(blob)
            QRcode.src = imgUrl
            QRcode.style.display = "block"
        } catch (error) {
            console.error("Error while fetching data:", error.message);
        }
    } else{
        alert("You seems generating nothing")
    }

}

generateQRBtn.addEventListener("click",getQRcode)