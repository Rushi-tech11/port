import { Request, Response } from "express";
import Skill from "../models/Skill";

export const getSkills = async (
  req: Request,
  res: Response
) => {
  try {
    const skills = await Skill.find();

    res.json(skills);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const createSkill = async (
  req: Request,
  res: Response
) => {
  try {
    const skill = await Skill.create(req.body);

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};