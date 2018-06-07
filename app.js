// Rover Object Goes Here
var rover = {};
rover.direction = "N";
rover.x = 0;
rover.y = 0;
rover.travelLog = [];
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  }

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  if (rover.direction === "W" && rover.x > 0) {
    rover.x -= 1;
    rover.travelLog.push("(" + rover.x + "," + rover.y + ").");
    console.log("You moved 1 West. Your current coordinates are (" + rover.x + "," + rover.y + ").");
  } else if (rover.direction === "N" && rover.y > 0) {
    rover.y -= 1;
    rover.travelLog.push("(" + rover.x + "," + rover.y + ").");
    console.log("You moved 1 North. Your current coordinates are (" + rover.x + "," + rover.y + ").");
  } else if (rover.direction === "S" && rover.y < 10) {
    rover.y += 1;
    rover.travelLog.push("(" + rover.x + "," + rover.y + ").");
    console.log("You moved 1 South. Your current coordinates are (" + rover.x + "," + rover.y + ").");
  } else if (rover.direction === "E" && rover.x < 10) {
    rover.x += 1;
    rover.travelLog.push("(" + rover.x + "," + rover.y + ").");
    console.log("You moved 1 East. Your current coordinates are (" + rover.x + "," + rover.y + ").");
  } else {
    console.log("You can't move in that direction! Your current coordinates are (" + rover.x + "," + rover.y + ").");
  }
}

function moveBackward(rover){
  console.log("moveBackward was called");
  if (rover.direction === "W" && rover.x < 10) {
    rover.x += 1;
    rover.travelLog.push("(" + rover.x + "," + rover.y + ").");
    console.log("You moved 1 East. Your current coordinates are (" + rover.x + "," + rover.y + ").");
  } else if (rover.direction === "N" && rover.y < 10) {
    rover.y += 1;
    rover.travelLog.push("(" + rover.x + "," + rover.y + ").");
    console.log("You moved 1 South. Your current coordinates are (" + rover.x + "," + rover.y + ").");
  } else if (rover.direction === "S" && rover.y > 0) {
    rover.y -= 1;
    rover.travelLog.push("(" + rover.x + "," + rover.y + ").");
    console.log("You moved 1 North. Your current coordinates are (" + rover.x + "," + rover.y + ").");
  } else if (rover.direction === "E" && rover.x > 0) {
    rover.x -= 1;
    rover.travelLog.push("(" + rover.x + "," + rover.y + ").");
    console.log("You moved 1 West. Your current coordinates are (" + rover.x + "," + rover.y + ").");
  } else {
    console.log("You can't move in that direction! Your current coordinates are (" + rover.x + "," + rover.y + ").");
  }
}

function commandRover(commands) {
  var validCommand;
  for (var j = 0; j < commands.length; j++) { 
    if (commands[j] !== ("f" || "b" || "r" || "l")) {
      validCommand = false;
    } else {
      validCommand = true;
    }
  }

  if (validCommand === true) {
    for (var i = 0; i < commands.length; i++) { 
    switch(commands[i]) {
      case "f":
      moveForward(rover);
      break;
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
      } 
      }
    } else {
      console.log("Invalid command.");
    }
  }