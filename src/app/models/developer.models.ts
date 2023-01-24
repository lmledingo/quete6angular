import { skills } from "./skills.models";

export class developers {

  constructor(
    public lastName : string,
    public firstName : string,
    public age : number,
    public gender : string,
    public bio : string,
    public skill: [skills]
    ) {}
}