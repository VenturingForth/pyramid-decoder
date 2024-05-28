const { decode } = require("../pyramid-decoder")

describe("Pyramid Decoder Test", () => {
    test("Should return `I love computers` from the decoded message file", () => {
        const messageFilePath = `./message.txt`;
        decodedMessage = decode(messageFilePath);
        expect(decodedMessage).toBe("I love computers");
    })
})