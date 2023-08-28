      document.querySelector('.open-modal').addEventListener('click', ()=> {
        document.querySelector('.modal-container').style.display = "flex";
      });


     document.querySelector('.modal-closed-button').addEventListener('click', ()=> {
        document.querySelector('.modal-container').style.display = "none";
      });

      const button = document.querySelector('.button-open-catalog');

      button.addEventListener('click', () => {
        button.classList.toggle('active')
      })
