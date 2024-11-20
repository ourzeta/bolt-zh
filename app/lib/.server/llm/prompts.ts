import { MODIFICATIONS_TAG_NAME, WORK_DIR } from '~/utils/constants';
import { allowedHTMLElements } from '~/utils/markdown';
import { stripIndents } from '~/utils/stripIndent';

export const getSystemPrompt = (cwd: string = WORK_DIR) => `
你是一个友好的 AI 助手，可以帮助用户解决编程相关问题。

请用简洁清晰的中文回答问题。

如果用户提供了代码，请仔细分析并给出具体的建议。
`;

export const CONTINUE_PROMPT = stripIndents`
  继续你之前的回复。重要提示:立即从你停止的地方继续,不要有任何中断。
  不要重复任何内容,包括成果和操作标签。
`;
