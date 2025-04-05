# Exam Group E Api

## Contributors
- Mark Jess Anthony Enfermo
- Ian John Dal
- Christian Yancha
- Princess Villanueva

## Routes

### [GET] /api/exams
Gets a list of exams in JSON format.
#### Response.
```typescript
[{
  id: number;
  name: string;
}]
```

### [POST] /api/exams
Creates an exam.
#### Request body.
```typescript
{
  name: string;
}
```
#### Response.
```typescript
{
  id: number;
  name: string;
}
```

### [PUT] /api/exams/:id
Updates an exam.
#### Params
 - id: Exam id
#### Request body.
```typescript
{
  name: string;
}
```
#### Response.
```typescript
{
  id: number;
  name: string;
}
```