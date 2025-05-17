document.getElementById('add-button').addEventListener('click', async () => {
    const field1 = document.getElementById('field-1');
    const field2 = document.getElementById('field-2');

    const response = await fetch('/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({num1: field1.value, num2: field2.value})
    });

    const data = await response.json();
    console.log(data);
    document.getElementById('result-area').textContent = `Sum = ${data.num3}`;
});