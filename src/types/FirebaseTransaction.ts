import firebase from "firebase/app";
import { Timestamp } from "firebase/firestore";

interface AuthorType {
   id: string;
   name: string;
}
export type FirebaseTransactionType = {
   date: Timestamp;
   desc: string;
   id: string;
   type: string;
   value: number;
   author: AuthorType;
};
