import { execSync } from "child_process";
const gitInfo = {
  commit_hash: execSync('git log --pretty=format:"%h" -n1').toString().trim(),
  date: execSync("git log -1 --format=%cd").toString().trim(),
};

export default gitInfo;
