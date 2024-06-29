import { exec } from "node:child_process";

exec('arp -a', (err, stdout, stderr) => {
    const devices = stdout.split('\n').filter(Boolean)
    let buff = [];
    devices.forEach(device => {
      let meta_data = {
        name: '',
        ip: '',
        mac: ''
      }
      const split_chunk = device.split(" ")
      meta_data.name = split_chunk[0];
      meta_data.ip = split_chunk[1].replace("(", "").replace(")", "")
      meta_data.mac = split_chunk[3]
      if(split_chunk[3].indexOf("incomplete") >= 0) return;
      buff.push(meta_data)
    })
    console.log(buff)
  });

