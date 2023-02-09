-- Create a new database called 'todos'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'todos'
)
CREATE DATABASE todos
GO

-- Create a new table called 'tasks' in schema 'dbo'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.tasks', 'U') IS NOT NULL
DROP TABLE dbo.tasks
GO
-- Create the table in the specified schema
CREATE TABLE dbo.tasks
(
    tasksId INT NOT NULL PRIMARY KEY, -- primary key column
    title [NVARCHAR](50) NOT NULL,
    description [NVARCHAR](50) NOT NULL,
    date [Date] NOT NULL
    -- specify more columns here
);
GO




