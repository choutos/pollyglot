import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

async function translateText(text, targetLanguage) {
    const prompt = `Translate the following English text to ${targetLanguage}. 
    Provide the translation in this format:
    Original: [original text]
    Translation: [translated text]
    
    Text to translate: ${text}`;

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'user',
                content: prompt
            }],
            temperature: 0.7,
            max_tokens: 1000
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Translation error:', error);
        return 'An error occurred during translation.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const targetLanguage = document.getElementById('target-language');
    const translateBtn = document.getElementById('translate-btn');
    const resultDiv = document.getElementById('result');

    translateBtn.addEventListener('click', async () => {
        if (!inputText.value.trim()) {
            alert('Please enter some text to translate');
            return;
        }

        translateBtn.disabled = true;
        translateBtn.textContent = 'Translating...';
        resultDiv.style.display = 'none';

        const result = await translateText(
            inputText.value,
            targetLanguage.value
        );

        resultDiv.innerHTML = result.replace(/\n/g, '<br>');
        resultDiv.style.display = 'block';
        
        translateBtn.disabled = false;
        translateBtn.textContent = 'Translate';
    });
});
