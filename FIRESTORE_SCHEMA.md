# Firestore Data Model for "Schema"

## 1. Core Strategy
The database pattern follows a **Sub-collection per User** architecture to ensure security and scalability.
* **Database:** Google Cloud Firestore
* **Auth ID:** All collections are namespaced under `users/{userId}/` to simplify security rules.

## 2. Collections & Interfaces

### A. Subjects (`users/{uid}/subjects`)
*Stores the meta-data for the "Subject Management" feature.*

```typescript
interface Subject {
  id: string;              // UUID
  name: string;           // e.g., "Economics", "Calculus"
  color: string;          // Hex code for UI theming
  currentGoal: string;    // e.g., "Finish Chapter 4"
  createdAt: Timestamp;
  
  // Resources Hub
  resources: array<{
    title: string;        // e.g., "Drive Folder"
    url: string;
    type: 'drive' | 'notion' | 'pdf' | 'link';
  }>;
}