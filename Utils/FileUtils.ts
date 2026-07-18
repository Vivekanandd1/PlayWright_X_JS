import fs from 'fs';
import path from 'path';

export class FileUtils {
  static clearDirectory(dirPath: string) {
    const full = path.resolve(dirPath);
    if (fs.existsSync(full)) {
      fs.rmSync(full, { recursive: true, force: true });
    }
    fs.mkdirSync(full, { recursive: true });
  }
}
