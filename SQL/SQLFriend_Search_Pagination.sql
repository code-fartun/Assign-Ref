﻿ALTER proc [dbo].[Friends_Search_Pagination]
				  @PageIndex int
				 ,@PageSize int
				 ,@Query nvarchar(50)

as

/*
Declare @Query nvarchar(50) = 'Tom',
		@PageSize int= 1,
		@PageIndex int= 0

Execute dbo.Friends_Search_Pagination
			        @PageIndex
			       ,@PageSize
			       ,@Query

Select *
from dbo.Friends

*/

BEGIN

Declare @offset int= @PageIndex * @PageSize

			SELECT [Id]
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
	 		     ,[TotalCount]= COUNT(1) OVER()
FROM [dbo].[Friends]
WHERE(Title LIKE '%' + @Query+ '%')
 
ORDER BY Id
OFFSET @offset Rows 
Fetch Next @PageSize Rows ONLY

END
