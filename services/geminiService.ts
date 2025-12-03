// Mock service – works without API key or any external requests

export async function generateRecipe(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        `🍪 وصفة جاهزة based on: "${prompt}"\n\n` +
        `المكوّنات:\n` +
        `- طحين\n` +
        `- سكر\n` +
        `- زبدة\n` +
        `- بيضة وحدة\n` +
        `- فانيلا\n\n` +
        `طريقة التحضير:\n` +
        `1. منخل الطحين\n` +
        `2. منخل السكر والزبدة\n` +
        `3. منضيف البيضة والفانيلا\n` +
        `4. منخبز ع حرارة 180 لمدة 12 دقيقة\n\n` +
        `★ ملاحظة: الوضع Offline — بدون API`
      );
    }, 500);
  });
}
