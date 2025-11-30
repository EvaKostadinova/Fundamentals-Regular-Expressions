function extractEmails(text) {
    const pattern = /(?<=\s|^)[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@([A-Za-z]+(-[A-Za-z]+)*)(\.[A-Za-z]+(-[A-Za-z]+)*)+\b/g;

    const matches = text.match(pattern);
    if (matches) {
        console.log(matches.join("\n"));
    }

}

extractEmails('Please contact us at: support@github.com.');