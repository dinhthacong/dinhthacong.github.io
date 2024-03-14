let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('leuleu').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'Yeahhh hihu a bít ngay mà, cảm ơn quà 14/3 nhiều lắm nha :3, Iuuu bé nhiều';

    // Mostrar otro gif después de 3 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
  
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = 'Hiu hiu bùn quá đi mà :((((';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').innerHTML = 'Cóa đi mà'
            
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
       
            
           

        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('noBtn').innerHTML = 'Bé khum tặng anh thiệt seoooo !!!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';
            document.getElementById('siBtn').innerHTML = 'Đây nà!!'

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = 'Tặng anh điiiiii màaaaa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';
            document.getElementById('siBtn').innerHTML = 'Đây cơ mà elm'

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        
        case 3:
           
            document.getElementById('noBtn').innerHTML = 'Cục cưng à, tặng anh xong sau a dẫn đi ăn kemm nàa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;
        case 4:
           
            document.getElementById('noBtn').innerHTML = 'Ăn kem nà, ăn kem naaa !!!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';


            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
         
            noButtonState++;
            break;
        case 5:
           
            document.getElementById('noBtn').innerHTML = 'Hmmm vẫn bấm không ư :(( bùn quá điiii';
            document.getElementById('siBtn').innerHTML = 'Bấm điii khum dỗi đó';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('angry').style.display = 'block';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';

            noButtonState++;
            break;
        case 6:
           
            document.getElementById('noBtn').innerHTML = 'Chắc ny mk hết thưn mk rùiiiii';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('funny').style.display = 'block';
            document.getElementById('angry').style.display = 'none';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').innerHTML = 'Dỗi đóaaa bấm điii';

            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';
            
            noButtonState++;
            break;
        case 7:
           
            document.getElementById('noBtn').innerHTML = 'Thật sự anhh rất thích emm mà';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('funny').style.display = 'none';
            document.getElementById('love').style.display = 'block';
            document.getElementById('siBtn').innerHTML = 'Tình yêu ở đây';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
  
            noButtonState++;
            break;
        case 8:
           
            document.getElementById('noBtn').innerHTML = 'Anh sẽ bùnnn đóooooo';
            document.getElementById('siBtn').innerHTML = 'LOVE IS HERE BABI';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('funny').style.display = 'block';
            document.getElementById('love').style.display = 'none';
            document.getElementById('siBtn').style.fontSize = '140px';
            document.getElementById('siBtn').style.padding = '100px 140px';
       
            noButtonState++;
            break;

        case 9:
           
            document.getElementById('noBtn').innerHTML = 'Đừng làm tủn thưn a mừuuuuu';
            document.getElementById('siBtn').innerHTML = 'Bấm cho a zuii';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('funny').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '110px 160px';
          
            noButtonState++;
            break;

        case 10:
           
            document.getElementById('noBtn').innerHTML = 'Babiii ơi a vẫn ở đây chờ e naa, bấm bên trái điiii';
            document.getElementById('noBtn').innerHTML = 'Over Here !!!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('overhere').style.display = 'block';
            document.getElementById('sadGifContainer2').style.display = 'none';
         
            document.getElementById('siBtn').style.fontSize = '180px';
            document.getElementById('siBtn').style.padding = '120px 180px';
    
            noButtonState++;
            break;
        case 11:
           
            document.getElementById('noBtn').innerHTML = 'Anhh thật sự rất và rất iuu em đó';
            document.getElementById('siBtn').innerHTML = 'Em iuu anh thì bấm đây nà';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('overhere').style.display = 'none';
            document.getElementById('happyGifContainer').style.display = 'block';
            document.getElementById('siBtn').style.fontSize = '200px';
            document.getElementById('siBtn').style.padding = '130px 200px';
            
            noButtonState++;
            break;
        
        case 12:
           
            document.getElementById('noBtn').innerHTML = 'Đừng bỏ rơi chàng trai đáng thương này mà';
            document.getElementById('siBtn').innerHTML = 'Hằng Thịnh ơi, em có thể ở lại đây khum :3';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('love').style.display = 'block';
            document.getElementById('happyGifContainer').style.display = 'none';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '220px';
            document.getElementById('siBtn').style.padding = '140px 220px';
    
            noButtonState++;
            break;
        
        case 13:
           
            document.getElementById('noBtn').innerHTML = 'Em đồng ý nhóooooo';
            document.getElementById('siBtn').innerHTML = 'Đồng ý đê, đồng ý đê';

            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('love').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';
            document.getElementById('siBtn').style.fontSize = '240px';
            document.getElementById('siBtn').style.padding = '150px 240px';
         
            noButtonState++;
            break;
        
        case 14:
           
            document.getElementById('noBtn').innerHTML = 'Chỉ một lần và lần này thoaii, lần sau cx thế :3';
            document.getElementById('siBtn').innerHTML = 'Hi hu :3';
            document.getElementById('sadGifContainer').style.display = 'block';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '260px';
            document.getElementById('siBtn').style.padding = '160px 260px';
            
            noButtonState++;
            break;
        
        case 15:
           
            document.getElementById('noBtn').innerHTML = 'Nhaaaaaaaaaaaaaaaaaaaa';
            document.getElementById('siBtn').innerHTML = 'Năn nỉ đóa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('love').style.display = 'block';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '280px';
            document.getElementById('siBtn').style.padding = '170px 280px';
          
            noButtonState++;
            break;
        
     
        case 16:
                // document.getElementById('noBtn').innerHTML = "";
                // document.getElementById('noBtn').style.backgroundColor = '#F1330A';
                document.getElementById('siBtn').innerHTML = 'Lì thật đóa, giờ thì hết lựa chọn nha, babi phải tặng a rùi hehe';
                document.getElementById('noBtn').style.display = 'none';
                document.getElementById('love').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'none';
                document.getElementById('sadGifContainer2').style.display = 'none';
                document.getElementById('leuleu').style.display = 'block';
                document.getElementById('happyGifContainer').style.display = 'none';
                // Vuelve al estado 0
                noButtonState = 0;
                break;
        

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }
});


