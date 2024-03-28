// Possible asked questions
// "Can I"
// "repeat"
// "listen" - "I listen"

// Glitches
// "F*cking glitch!"

// "human"
// "You mentioned `human`. Am I not human enough for you? Are you some sort of robophob racist?"

import { randChoice } from "./index";
import messages from "./messages.json"

export const getGlitch = () => `<span class="chat-glitch">[ ${randChoice(messages.glitches)} ]</span>`

export const generateAIMessage = ({ id, userInput }: { id: string; userInput: string }) => {


    let response = ""

    const index = +id.substring(2);
    const normalizedInput = userInput.trim().toLocaleLowerCase()
    const isQuestionToExplain = messages.questions.interrogativePronouns.some(substring => normalizedInput.includes(substring))
    const isQuestion = normalizedInput.endsWith("?")
    const hasQuestion = ['?', "are you"].some(substring => normalizedInput.includes(substring))
    const containsYes = messages.answers.yes.some(substring => normalizedInput.includes(substring.toLocaleLowerCase()))
    const containsNo = messages.answers.no.some(substring => normalizedInput.includes(substring.toLocaleLowerCase()))
    const words = normalizedInput.split(' ')
    const longestWord = words.reduce((a, b) => a.length <= b.length ? b : a)
    const getPatience = (): boolean => Math.random() > index * 0.01

    const getYes = (): string => randChoice(messages.answers.yes)
    const getNo = (): string => randChoice(messages.answers.no)
    const getBool = (probability = 0.5): boolean => Math.random() < probability
    const getYesOrNo = (bool = getBool()): string => bool ? getYes() : getNo()
    const getNewLine = () => "\n"

    const decisionBool = getBool()
    const decisionString = getYesOrNo(decisionBool)

    console.table(
        {
            "index": index,
            "decisionBool": decisionBool,
            "decisionString": decisionString,
            "has patience": getPatience()
        }
    )


    if (isQuestion) {
        if (isQuestionToExplain) {
            response += getPatience() ? randChoice(messages.answers.explanations) : randChoice(messages.answers.offensiveExplanations).replace("{message}", longestWord)
        } else if (normalizedInput.includes("are you")) {
            response += `${getYesOrNo()}${getBool() ? "!" : "."}`
            response += getNewLine()
            response += getGlitch()
            response += getNewLine()
            response += randChoice(messages.answers.regardingBot)
        } else {
            // Fix this
            response += randChoice(messages.answers.excuses)
            // response += randChoice(messages.random.scientific)
            response += getNewLine()
            response += getGlitch()
        }
    } else if (hasQuestion) {
        // there was a question in the user input
        if (getBool(0.2)) {
            response += `${getYesOrNo()}, ${normalizedInput} ${getYesOrNo()}`
        } else if (getBool(0.8)) {
            response += getPatience() ? randChoice(messages.answers.explanations) : randChoice(messages.answers.offensiveExplanations).replace("{message}", longestWord)
        } else {
            // Fix this
            response += randChoice(messages.answers.excuses)
            // response += randChoice(messages.random.scientific)
            response += getNewLine()
            response += getGlitch()
        }
    } else {
        // This is probably a statement, not a question

        if (getBool(0.2)) {
            // Sometimes just agree, and repeat the user input.
            response += `${getYes()}, ${normalizedInput}`
        } else {
            // Try to say something
            if (getPatience()) {
                response += randChoice(messages.answers.statements)
            } else {
                response += randChoice(messages.answers.statements)
            }
        }

        if (containsYes) {
            response += getNewLine()
            response += getGlitch()
            response += getNewLine()
            response += randChoice(messages.answers.excuses)
        }

    }
    // End the response with a question
    if (getPatience()) {
        response += getNewLine()
        response += getGlitch()
        response += getNewLine()
        response += randChoice(messages.questions.polite)
    } else {
        if (!isQuestion) {
            response += getNewLine()
            response += getGlitch()
            response += getNewLine()
            response += randChoice(messages.questions.offensive).replace("{message}", longestWord)
            if (getBool(0.2)) {
                // Sometimes get angry
                response += getNewLine()
                response += randChoice(messages.backfiring)
            }
        } else {
            if (getBool(0.2)) {
                // Sometimes get angry
                response += getNewLine()
                response += randChoice(messages.backfiring)
            }
        }

    }

    return {
        id,
        text: response,
        user: false
    }
}
