// Browser environment
if(typeof window !== 'undefined') {
    ethersim = (typeof window.ethersim !== 'undefined') ? window.ethersim : require('ethersim');
}

// Node environment
if(typeof global !== 'undefined') {
    spawn = Npm.require('child_process').spawn;
    command = spawn('ethersim');
    command.stdout.on('data',  function (data) {
      console.log('ethersim stdout: ' + data);
    });

    ethersim = (typeof global.ethersim !== 'undefined') ? global.ethersim : Npm.require('ethersim');
}
