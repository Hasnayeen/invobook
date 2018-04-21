Object.defineProperty(window, 'Laravel', {
    value: {
        csrfToken: Math.floor(Math.random() * 9999999999)
    }
});
