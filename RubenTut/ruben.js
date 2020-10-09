"use strict";
import Paddle from "./paddle";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


ctx.clearRect(0, 0, 800, 600)

let paddle = new Paddle (GAME_WIDTH, GAME_HEIGHT);


paddle.draw(ctx)