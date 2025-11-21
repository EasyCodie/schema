import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "./config";
import type { Subject } from "@/types";

export async function createSubject(userId: string, subjectData: Omit<Subject, "id" | "createdAt">) {
  const subjectsRef = collection(db, "users", userId, "subjects");
  const docRef = await addDoc(subjectsRef, {
    ...subjectData,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
}

export async function updateSubject(userId: string, subjectId: string, updates: Partial<Subject>) {
  const subjectRef = doc(db, "users", userId, "subjects", subjectId);
  await updateDoc(subjectRef, updates);
}

export async function deleteSubject(userId: string, subjectId: string) {
  const subjectRef = doc(db, "users", userId, "subjects", subjectId);
  await deleteDoc(subjectRef);
}

export async function getSubject(userId: string, subjectId: string): Promise<Subject | null> {
  const subjectRef = doc(db, "users", userId, "subjects", subjectId);
  const snapshot = await getDoc(subjectRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as Subject;
}

export async function getSubjects(userId: string): Promise<Subject[]> {
  const subjectsRef = collection(db, "users", userId, "subjects");
  const q = query(subjectsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Subject);
}
