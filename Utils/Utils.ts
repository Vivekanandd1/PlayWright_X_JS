export default class Utils {
  static getCurrentDateTime(): string {
    return new Date().toISOString();
  }
}
