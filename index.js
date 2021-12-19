app.setExternal("someExternalFunction", (output) => {
  console.log(output)
});

const output = await sandbox.execute({ 
  endpoint: sandbox.endpoint,
  name: "Saish",
});

console.log(output);
