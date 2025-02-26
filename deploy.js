import { execSync } from "child_process";

try {
  execSync("git add dist -f && git commit -m 'Deploy' && git subtree push --prefix dist origin gh-pages", { stdio: "inherit" });
  console.log("✅ デプロイ完了");
} catch (error) {
  console.error("❌ デプロイエラー", error);
}
