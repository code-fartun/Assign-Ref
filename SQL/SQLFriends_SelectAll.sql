ALTER proc [dbo].[Friends_SelectAllV3]
		
as
/*
	

Execute dbo.Friends_SelectAllV3

*/

BEGIN

SELECT	f.[Id]
	,f.[Title]
	,f.[Bio]
     	,f.[Summary]
	 ,f.[Headline]
	 ,f.[Slug]
	 ,f.[StatusId]
	 ,i.[Id]  
	 ,i.[Url]
	 ,i.[TypeId]
	 ,f.[UserId]
	 ,f.[DateCreated]
	 ,f.[DateModified]
     

     
FROM [dbo].[FriendsV2] as f inner join dbo.Images as i
ON f.PrimaryImageId = i.Id

END
