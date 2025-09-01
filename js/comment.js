document.getElementById('btn-comment')
    .addEventListener('click', function () {
        // step 01 get the text from the text box
        const textBox = document.getElementById('text-Box')
        const comment = textBox.value

        //  Step 02  create a p element
        const newComment = document.createElement('p')
        newComment.innerText = comment

        // step 03 add class
        const classes = document.getElementById('get-classes').classList
        newComment.classList.add(...classes)
        newComment.classList.replace('mb-4', 'mt-4')
    }
    )