ALTER proc [dbo].[Friends_Pagination]
			         @PageIndex int
			         ,@PageSize int
		 

as 
/*
Declare
Execute dbo.Friends_Pagination   @PageIndex
				 ,@PageSize

*/
BEGIN
Declare  @offset int=@PageIndex *@PageSize

SELECT     			  [Id]
      				 ,[Title]
    				 ,[Bio]
     				 ,[Summary]
      				 ,[Headline]
     				 ,[Slug]
     				 ,[StatusId]
     				 ,[PrimaryImageUrl]
    				 ,[DateCreated]
     				 ,[DateModified]
      				 ,[UserId]
				 ,[TotalCount]=COUNT (1) OVER()
FROM [dbo].[Friends]
ORDER BY Id
OFFSET @offset Rows
Fetch Next @PageSize Rows ONLY
	
END



