import * as fsPromise from 'fs/promises';
import * as path from 'path';
import { Post } from '../model/post.model';


export const readPostsFromFile = async (fileName: string) =>
JSON.parse((await fsPromise.readFile(fileName)).toString()) as Post[];

export const writePostsToFile = async (fileName: string, posts: Post[]) =>
fsPromise.writeFile(fileName, JSON.stringify(posts, null, 4));

