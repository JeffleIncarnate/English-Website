function onComplete() {
  let dict = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    q1: document.getElementById("q1").value,
    q2: document.getElementById("q2").value,
  };

  for (const [key, value] of Object.entries(dict)) {
    if (value === "") {
      alert("Error code: C404, CENSORSHIP");
      break;
    }
  }

  console.log(dict.age);

  if (dict.name !== "Guy Montag") {
    alert("Error code: C404, CENSORSHIP: Name needs to be 'Guy Montag'");
    return;
  }

  if (dict.age !== "16") {
    alert("Error code: C404, CENSORSHIP: Age needs to be '16'");
    return;
  }

  if (dict.q1 !== "Unknown") {
    alert("Error code: C404, CENSORSHIP: Name needs to be 'Guy Montag'");
    return;
  }

  if (dict.q2 !== "Unknown") {
    alert("Error code: C404, CENSORSHIP: Name needs to be 'Guy Montag'");
    return;
  }

  alert("Success! Quiz response has been recorded");
}
