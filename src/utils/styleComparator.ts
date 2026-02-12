import type { ValidationRule } from '../types';

interface ValidationResult {
  isValid: boolean;
  passedRules: ValidationRule[];
  failedRules: ValidationRule[];
  score: number;
}

export function validateCss(
  userCss: string,
  rules: ValidationRule[]
): ValidationResult {
  const passedRules: ValidationRule[] = [];
  const failedRules: ValidationRule[] = [];

  for (const rule of rules) {
    const passed = checkRule(userCss, rule);
    if (passed) {
      passedRules.push(rule);
    } else {
      failedRules.push(rule);
    }
  }

  const score = rules.length > 0 ? (passedRules.length / rules.length) * 100 : 100;

  return {
    isValid: failedRules.length === 0,
    passedRules,
    failedRules,
    score,
  };
}

function checkRule(css: string, rule: ValidationRule): boolean {
  const normalizedCss = css.toLowerCase().replace(/\s+/g, ' ');
  const property = rule.property.toLowerCase();
  const expectedValue = rule.expectedValue?.toLowerCase();

  switch (rule.check) {
    case 'exists':
      return normalizedCss.includes(property);

    case 'contains':
      if (!expectedValue) return false;
      return normalizedCss.includes(expectedValue);

    case 'equals':
    default: {
      if (!expectedValue) {
        return normalizedCss.includes(property);
      }

      // Look for property: value pattern
      const pattern = new RegExp(
        `${escapeRegExp(property)}\\s*:\\s*${escapeRegExp(expectedValue)}`,
        'i'
      );
      return pattern.test(normalizedCss);
    }
  }
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function parseStyleValue(css: string, property: string): string | null {
  const normalizedCss = css.replace(/\s+/g, ' ');
  const pattern = new RegExp(`${escapeRegExp(property)}\\s*:\\s*([^;]+)`, 'i');
  const match = normalizedCss.match(pattern);
  return match ? match[1].trim() : null;
}

export function normalizeCSS(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Normalize whitespace
    .replace(/\s*([{:;}])\s*/g, '$1') // Remove spaces around delimiters
    .trim()
    .toLowerCase();
}
