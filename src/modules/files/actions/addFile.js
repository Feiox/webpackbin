function addFile({ state }) {
  const isEntry = state.get('app.currentBin.newFileIsEntry');
  const newFile = {
    name: state.get('app.currentBin.newFileName'),
    isEntry,
    content: '',
    lastCursorPosition: {
      line: 0,
      ch: 0,
    },
    show: Date.now(),
  };

  if (isEntry) {
    const indexContent = state.get('app.currentBin.files.0.content');

    state.set(
      'app.currentBin.files.0.content',
      indexContent.replace(
        '</body>',
        `
    <script src="${newFile.name}"></script>
  </body>
    `
      )
    );
  }

  state.push('app.currentBin.files', newFile);
  state.set(
    `app.currentBin.changedFiles.${state.get('app.currentBin.files').length -
      1}`,
    true
  );
}

export default addFile;
