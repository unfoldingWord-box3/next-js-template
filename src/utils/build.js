export function getBuildId() {
  return { version: process.env.NPM_PACKAGE_VERSION, hash: process.env.BUILDNUMBER }
}
